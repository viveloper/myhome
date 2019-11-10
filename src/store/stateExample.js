const ReduxStoreState = {
  user : {
    email: 'abcd@alskdjfl.com',
    username: 'casio',
    token: 'alksdf-sljdf-sldjfa-sdlkjfl'
  },
  posts: [
    {
      title: 'title',
      body: 'slkflasjdlf slkkjflksa slkdjflaks asdlkjflaksdj aslkdjfldksa',
      author: 'casio',
      views: 10,
      recommendation: 3,
      createTime: new Date().toISOString(),
      updateTime: new Date().toISOString()
    }
  ],
  todoList: [
    {
      message: 'message',
      author: 'casio'
    }
  ],
  isLoading: false
}