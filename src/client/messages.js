export default {
  app: {
    madeByHtml: `made by @DavidFogas <a href='https://twitter.com/DavidFogas'></a>`
  },
  auth: {
    form: {
      button: {
        login: 'Login',
        signup: 'Sign up'
      },
      hint: 'Hint: pass1',
      legend: 'Login/ Sign up',
      placeholder: {
        email: 'your@email.com',
        password: 'password'
      },
      wrongPassword: 'wrongPassword'
    },
    logout: {
      button: 'Logout'
    },
    title: 'Login'
  },
  buttons: {
    cancel: 'Cancel',
    edit: 'Edit',
    save: 'Save'
  },
  confirmations: {
    cancelEdit: `You have unsaved changes. Are you sure you want to cancel them?`
  },
  home: {
    infoHtml: `App starter kit for <a href="https://github.com/steida/este">Este.js</a>. Check`,
    title: 'Este.js App',
    todos: 'todos'
  },
  me: {
    title: 'Me',
    welcome: `Hi {email}. This is your secret page.`
  },
  menu: {
    headerHtml: `<a href='https://github.com/dfogas/baghira'>baghira.js</a> App`,
    home: 'Home',
    login: 'Login',
    me: 'Me {protected}'
  },
  notFound: {
      continueMessage: 'Continue here please.',
      header: 'This page isn\'t available',
      message: 'The link may be broken, or the page may have been removed.',
      title: 'Page Not Found'
  },
  validation: {
    email: `Email adress is not valid.`,
    password: `Password must contain at least {minLenght} characters`,
    required: `Please fill out {prop, select,
      email {email}
      password {password}
      other {'{prop}'}
    }.`
  }
};
