import {create} from 'zustand';

const authStore = create ( (set)=>({
    //propiedades
    user:null,
    color:false,

    //metodos
    loginUser: (token) => set({ user: token }),
    logoutUser:()=>set({user:null}),
    cambiarColor:()=>set((state)=>({color:!state.color}))
}))


export default authStore