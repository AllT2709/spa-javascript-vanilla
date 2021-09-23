const getHash = () =>{
  console.log(window.location.hash);

  return window.location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
}

export default getHash;