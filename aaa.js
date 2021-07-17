const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];
  
  const toggleUserState = ((allUsers, userName) => {
      const promise = new Promise((resolve, reject) => {
        
        allUsers.map(user => {
            if(user.name === userName){
                resolve({ ...user, active: !user.active } )
            }
                 reject(user)
            
        });
      });

  
    return promise
  });
  
  const logger = updatedUsers => console.table(updatedUsers);
  
  /*
   * Сейчас работает так
//    */
//   toggleUserState(users, 'Mango', logger);
//   toggleUserState(users, 'Lux', logger);
  
  /*
   * Должно работать так
   */
  toggleUserState(users, 'Mango').then(logger);
  toggleUserState(users, 'Lux').then(logger).catch(logger);