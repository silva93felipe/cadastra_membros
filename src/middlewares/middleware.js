exports.middlewareGlobal = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
};

exports.loginRequired = (req, res, next) =>{
    if(!req.session.user){
        req.flash('errors', 'Você precisa está logado.');
        req.session.save(()=> res.redirect('/login'));
        return;
    }

    next();
}