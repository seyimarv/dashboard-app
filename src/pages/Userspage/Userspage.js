import React from "react";
import ContainerWithAppbar from "../../components/Containerwithappbar/ContainerWithAppbar";
import UsersCard from "../../components/Userscomponent/UsersCard";

import useFetchData from "../../utils/api";

const Userspage = () => {
    const { data, loading, error } = useFetchData('https://randomuser.me/api/?results=100')
    return (
        <ContainerWithAppbar>
            {
                loading && <h1>LOADING</h1>
            }
            {
                data &&   <UsersCard data={data.results} dataLimit={8} pageLimit={4}/>
            }
          
        </ContainerWithAppbar>
    )
}

export default Userspage