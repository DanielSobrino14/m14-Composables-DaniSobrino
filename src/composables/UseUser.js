import { ref } from "vue";

const baseURL = "https://jsonplaceholder.typicode.com/users";

export default function useUser() {
  const user = ref(null);

  const llegirUsuari = async (id) => {
      const response = await fetch(`${baseURL}/${id}`);
      user.value = await response.json();
  };

  return {
    user,
    llegirUsuari,
  };
}
