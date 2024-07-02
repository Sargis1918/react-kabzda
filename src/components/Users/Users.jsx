import React from "react";
import { NavLink } from "react-router-dom";
import "./Users.css";
const Users = (props) => {
   
  let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className="users">
      {props.isFetching ? props.preloader : null}

      {pages.map((p) => {
        if (p <= 10) {
          return (
            <ul className="users__pagescount">
              <li>
                <button
                  className={
                    props.currentPage === p
                      ? "users__selectedPage"
                      : "users__page"
                  }
                  onClick={(e) => {
                    props.onPageChanged(p);
                  }}
                >
                  {p}
                </button>
              </li>
            </ul>
          );
        }
      })}
      <div className="users__number"></div>
      <div className="users__header">Users</div>
      <div className="users__container">
        {props.users.map((u) => {
          return (
            <div key={u.id} className="users__body">
              <section className="users__info">
                <div className="users__img-subscribe">
                  <NavLink to={"/profile/" + u.id}>
                    <div className="users__img">
                      <img
                        src={
                          u.photos.small != null
                            ? u.photos.small
                            : props.userPhoto
                        }
                        alt=""
                      />
                    </div>
                  </NavLink>
                  {u.followed ? (
                    <button
                      disabled={props.followingInProgress.some(id=>id===u.id)}
                      className="users__subscribe"
                      onClick={() => {
                        props.unfollow(u.id)
                      }}
                    >
                      Unsubscribe
                    </button>
                  ) : (
                    <button
                      disabled={props.followingInProgress.some(id=>id===u.id)}
                      onClick={() => {props.follow(u.id)
                        
                      }}
                      className="users__subscribe"
                    >
                      Subscribe
                    </button>
                  )}
                </div>
                <div className="users__name-town-some-else">
                  <div className="users__info-column">
                    <span className="users__name">{u.name}</span>
                    <span className="users__status">{u.status}</span>
                  </div>
                  <div className="users__info-column">
                    <span className="users__country">
                      {"u.location.country"}
                    </span>
                    <span className="users__city">{"u.location.city"}</span>
                  </div>
                </div>
              </section>
            </div>
          );
        })}

        <div className="users__show-more">
          <button className="users__show-more-item">Show more</button>
        </div>
      </div>
    </div>
  );
};
export default Users;
