import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePages from "../HomePage/HomePages";
import { getPosts, getUsers } from "../../utils/Api";
import "./App.scss";
import DetailedPage from "../DetailedPage/DetailedPage";

function App() {
  const [postInfo, setPostInfo] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [selectedCard, setSelectedCard] = useState({});

  const getDataPost = async () => {
    try {
      const data = await getPosts();
      setPostInfo(data.data);
    } catch (e) {
      if (e.name === "AxiosError") {
      }
    }
  };

  const getDataUser = async () => {
    try {
      const data = await getUsers();
      setUserInfo(data.data);
    } catch (e) {
      if (e.name === "AxiosError") {
      }
    }
  };

  useEffect(() => {
    getDataPost();
    getDataUser();
  }, []);

  const newArr = postInfo.map((t1) => ({
    ...t1,
    ...userInfo.find((t2) => t2.id === t1.userId),
  }));

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/dk-frontend"
          element={<HomePages newArr={newArr} onClick={handleCardClick} />}
        />
        <Route path="/dk-frontend/details" element={<DetailedPage card={selectedCard} />} />
      </Routes>
    </div>
  );
}

export default App;
