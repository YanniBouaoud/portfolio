class LetsChatService {
  static async save(newLetsChat) {
    try {
      const response = await fetch(`http://localhost:8080/letschat/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLetsChat),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default LetsChatService;
