interface userType {
    id : number;
    name : string;
    email : string;
    isActive : boolean;
}

const filterActiveUsers = (users : userType[]): userType[] => {
    let result = users.filter(user => user.isActive===true);
    return result;
}



const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

console.log(filterActiveUsers(users));