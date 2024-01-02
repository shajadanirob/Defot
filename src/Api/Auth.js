
// save user data in the database
export const savedUser = async AllData =>{
    const currentUser = {
        email : AllData.email,
        role : 'admin',
        status:'active',
        name: AllData.name,
        image : AllData.imageData.data.display_url
        
        
    }
    const {data} = await axiosSecure.patch(`/users/${AllData?.email}`,currentUser)
    return data
}



// get token from database

import axiosSecure from "."

export const getToken = async email =>{
    const {data} = await axiosSecure.post(`/jwt`,email)
    console.log('token receve from database---->',data)
    return data
}

// clear token from browser 
export const ClearCookie = async () =>{
    const {data} = await axiosSecure.get(`/logout`)
    return data
}