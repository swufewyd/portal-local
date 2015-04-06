module.exports = {
    authIntercept: function (resp) {
        switch (resp.status) {
            case 401:
                console.warn(resp.status + ' to href: /signin/admin');
                //window.location.href = '/signin/admin';
                break;

            default:
                // do nothing
        }
    }
};
