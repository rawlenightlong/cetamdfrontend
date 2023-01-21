const URL = "https://cetamdapi.onrender.com/gigs"

export const gigsLoader = async () => {
    const response = await fetch(URL + "/gigs")
    const gigs = await response.json()
    return gigs
}

export const gigLoader = async ({params}) => {
    const response = await fetch(URL + "/gigs/" + params.id)
    const gig = await response.json()
    return gig
}