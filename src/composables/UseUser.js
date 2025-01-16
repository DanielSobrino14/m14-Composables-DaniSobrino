import { ref } from "vue";

const baseURL = "https://jsonplaceholder.typicode.com/users";

export default function useUser() {
  const user = ref(null);

  const llegirUsuari = async (id) => {
    try {
      const response = await fetch(`${baseURL}/${id}`);
      user.value = await response.json();
    } catch (error) {
      console.error(`Error obtenint l'usuari amb ID ${id}:`, error);
    }
  };

  return {
    user,
    llegirUsuari,
  };
}
