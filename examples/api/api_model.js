import React from 'react';
import { users } from './api_decorator';

const UserDetail = users(({ users }) => {
  const user = users.list().data[0];
  if ( user ) {
    const detail = users.get( user.data.id );
    return (
      <div style={{ width: '48%' }}>
        {
          detail.error ?
            `Error: ${ JSON.stringify( detail.$error ) }` :
          detail.isPending ?
            `Loading...` :
          <code style={{ width: '300px' }}>{ JSON.stringify( detail ).replace( /,/g, ', ') }</code>
        }
      </div>
    );
  } else {
    return <div>Waiting for users...</div>;
  }
});

export default UserDetail;
