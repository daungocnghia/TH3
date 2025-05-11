import { useEffect, useState } from "react";
import { fetchModel } from "../../lib/fetchModelData";

function UserPhotos({ userId }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetchModel(`/photosOfUser/${userId}`).then(setPhotos);
  }, [userId]);

  return (
    <div>
      {photos.map((photo) => (
        <div key={photo._id}>
          <img src={`/images/${photo.file_name}`} alt="User photo" />
          <p>{photo.date_time}</p>
          <ul>
            {photo.comments.map((comment) => (
              <li key={comment._id}>
                <b>{comment.user.first_name} {comment.user.last_name}:</b> {comment.comment}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default UserPhotos;
