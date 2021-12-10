module.exports = {
    mode: process.env.NODE_ENV === 'production' ? "live" : 'sandbox',
    sandbox: process.env.NODE_ENV === 'production' ? false : true,
//    sandbox_email: process.env.NODE_ENV === 'production' ? null : 'email@sandbox.pagseguro.com.br',
    sandbox_email: process.env.NODE_ENV === 'production' ? null : 'c63431834812794785158@sandbox.pagseguro.com.br',
    email: 'jgeraldocmaciel@gmail.com',
    token: '397E90945C2B4321BC379BA3AB41332F',
    notificationURL: "https://api.loja-teste.ampliee.com/v1/api/pagamentos/notificacao",
}