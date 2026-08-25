 module.exports = {
    default: {
        timeout: 30000,

        require: [
            'support/**/*.js',
            'step-definitions/**/*.js',
            'hooks/**/*.js'
        ],

       paths: [
           'features/**/*.feature'
       ],

        format: ['progress']
    }
};