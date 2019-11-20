const GetUser = demand('use-cases/user');

module.exports = (dependencies) => {

    const { userRepository } = dependencies.DatabaseService;

    const getUser = (req, res, next) => {
        const UserAction = GetUser(userRepository);

        UserAction.getByUsername(req.params.username)
            .then((user) => {
                res.json(user);
            }, (err) => {
                next(err);
            });
    };

    const getAllUser = (req, res, next) => {
        const UserAction = GetUser(userRepository);

        UserAction.getAll()
            .then((user) => {
                res.json(user);
            }, (err) => {
                next(err);
            });
    };

    return {
        getUser,
        getAllUser
    };
};