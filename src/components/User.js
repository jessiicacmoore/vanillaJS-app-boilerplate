import axios from 'axios';

const User = async () => {
  const res = await axios.get('https://randomuser.me/api');
  const user = res.data.results[0];

  console.log(user);

  const template = `
   <div class="card">
    <img src="${user.picture.large}"/>
    <div class="card__body">
      <h1>${user.name.first} ${user.name.last}</h1>
    </div>
   </div>
  `;

  return template;
}

export default User;