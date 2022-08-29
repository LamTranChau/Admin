const User = ({data,onDelete}) => {
    return (    
      <div key={data.id}>
            <div>{data.name}</div>
            <div>{data.phone}</div>
            <button
              onClick={() => {
                onDelete(data.id)
              }}
              >
               Delete
            </button>
          </div>
  );
};

export default User;
