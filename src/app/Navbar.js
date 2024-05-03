import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchNotifications, selectAllNotifications } from "../features/notifications/notificationsSlice";

export const Navbar = () => {
  const dispatch = useDispatch()
  const notifications = useSelector(selectAllNotifications)
  const numUnreadNotifications = notifications.filter(n => !n.read).length
  let unReadNoticationsBadge;
  if (numUnreadNotifications > 0) {
    unReadNoticationsBadge = (
      <span className="badge">{numUnreadNotifications}</span>
    )
  }
  const fetchNewNotitications = () => {
    dispatch(fetchNotifications())
  }
  return (
    <nav>
      <section>
        <h1>Red Social Redux Essentials</h1>
      </section>
      <div className="navContent">
        <div className="navLinks">
          <Link to="/">Posts</Link>
          <Link to="/users">Usuarios</Link>
          <Link to="/notifications">Notificaciones {unReadNoticationsBadge}</Link>
        </div>
        <button className="button" onClick={fetchNewNotitications}>
          Cargar Notificaciones
        </button>
      </div>
    </nav>
  );
};
