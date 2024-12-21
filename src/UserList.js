import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  // État pour stocker la liste des utilisateurs
  const [listOfUsers, setListOfUsers] = useState([]);

  // Appeler l'API pour récupérer les utilisateurs
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUsers(response.data); // Enregistrer les données dans l'état
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des utilisateurs :", error);
      });
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {listOfUsers.map((user) => (
          <li key={user.id} style={{ margin: "10px 0", listStyle: "none" }}>
            <div style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "5px" }}>
              <h2>{user.name}</h2>
              <p><strong>Email :</strong> {user.email}</p>
              <p><strong>Téléphone :</strong> {user.phone}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
