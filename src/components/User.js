import React from 'react';
class User extends React.Component{
    constructor(){
        super();
        this.state = {
            userInfo : {
                image : "default",
                name : "default",
                location : "default"
            },
        };
    }

    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/rahulpant2002');
        const json = await data.json();

        this.setState({
            userInfo : json,
        });
        console.log(json);
    }


    render(){
        const {name, location, avatar_url, bio} = this.state.userInfo;
        return(
            <div className='border-[2px] border-black roun-[3px] flex w-[33%] flex-col justify-center items-center p-[10px] m-[20px]'>
                <img src={avatar_url} alt="userImg" className='h-[150px] w-[150px]' />
                <div >{name}</div>
                <div>{location}</div>

                <br />
                <div className=' text-pink-800 font-medium'>{bio}</div><br />
            </div>
        )
    }   
}
export default User;