import React, { Component } from 'react';
import  axios  from 'axios';
import MenuList from '../components/MenuList/MenuList'
import AddMenu from '../components/AddMenu/AddMenu'
class Container extends Component {

    state ={
        list :[],
        

    }

    componentDidMount(){
      axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5").then( res =>{
          console.log(res.data);
          const result = res.data
          this.setState({list : result})
      })

    }
    render() {
      const data = this.state.list.map(item=>{
                return <MenuList  key={item.id}  id={item.userId}  ></MenuList>
      })
    
        return (
            <div>
               <section> {data}</section> 
               <AddMenu/>
            </div>
        )
    }
}


export default Container;