import { redirect } from "react-router-dom";

const URL = "https://cetamdapi.onrender.com/gigs"

export const createAction = async ({request}) => {
    const formData = await request.formData()
    const newGig = {
        event: formData.get("event"),
        location: formData.get("location"),
        date: formData.get("date")
    }
    await fetch(URL + "/gigs", {
        method: "post",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(newGig)
    })
    return redirect("/")
} 

export const updateAction = async ({request,params})=> {
    const formData = await request.formData()
    const updatedGig = {
        event: formData.get("event"),
        location: formData.get("location"),
        date: formData.get("date")
    }
    await fetch(URL + "/gigs/" + params.id, {
        method: "put",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify(updatedGig)
    })
}
export const deleteAction = async ({params}) => {
    await fetch(URL + "/gigs/" + params.id,{
        method:"delete"
    })
    return redirect("/")
}