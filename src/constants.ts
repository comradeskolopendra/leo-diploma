export const requestClubs = fetch(`https://leo-diploma-backend.vercel.app/getClubs`);
export const requestReviews = fetch(`https://leo-diploma-backend.vercel.app/getRevs`);
export const requestSlides = fetch(`https://leo-diploma-backend.vercel.app/getSlides`);
export const setClub = (formData: any) => fetch(`https://leo-diploma-backend.vercel.app/setClub`, {
    method: "POST",
    body: JSON.stringify(formData)
})