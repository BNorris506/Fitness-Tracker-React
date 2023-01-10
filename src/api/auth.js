// This api call helps to register a user, it is used in the register component 
export const registerUser = async (username, password) => {
  try {
      const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', 
      {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
      body: JSON.stringify({
          user: {
              username,
              password,
  }
})
});

const {data: { token }} = await response.json();
  return token;

  } catch (error) {
      console.log(error);
  }
}




export const loginUser = async (username, password) => {
    try {
        const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/login', 
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username,
                    password,
                }
            })
        });
        
        const {data: { token }} = await response.json();
        return token;
        
    } catch (error) {
        console.log(error);
    }
};

export const fetchMe = async (token) => {
  try {
    const response = await fetch ('http://fitnesstrac-kr.herokuapp.com/api/users/me', 
    {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
  })

  const { data } = await response.json();
  console.log("This is me object: ", data)
  return data;
  } catch (error) {
    console.error(error);
  }
}


// Get/Post/Delete requests

export const getRoutinesByUsername = async (username) => {
  
    fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/${username}/routines`)
    .then(response => response.json())
    .then(result => {
      console.log(result)
    })
    .catch(console.error);
  }


export const getActivities = async () => {
    fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
  headers: {
    'Content-Type': 'application/json',
  },
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
}



// !check to verify this is working
export const createActivity = async (token, name, description) => {
    fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
        method: "POST", 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
            Activity: {name, description}
  }),
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
}

// PATCH /api/activities/:activityId (*)
export const patchActivity = async (token, name, description, id) => {
    fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities/${id}`, {
  method: "PATCH",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    Activity: {name, description}
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
}

// GET /api/activities/:activityId/routines
export const getRoutineByActivityId = async (activityId) => {
    fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities/${activityId}/routines`, {
  headers: {
    'Content-Type': 'application/json',
  },
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
}

// GET /api/routines
// export const getRoutines = async () => {
//     fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }).then(response => response.json())
//     .catch(console.error);
// }

export const getRoutines = async () => {
  try{
   const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
    headers: {
    'Content-Type': 'application/json',
  },
});
const result = await response.json();
return result;
} catch (error) {
    console.log(error);
}
}

// POST /api/routines (*)
// !Double check here
export const createRoutine = async (token, name, goal, isPublic) => {
 fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    Routine: {name, goal, isPublic}
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
}

// PATCH /api/routines/:routineId (**)
// ?how do we check for user only? 

export const patchRoutine = async (token, name, goal, isPublic, routineId) => {
    fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        body: JSON.stringify({
          Routine: {name, goal, isPublic}
        })
      }).then(response => response.json())
        .then(result => {
          console.log(result);
        })
        .catch(console.error);
}

// DELETE /api/routines/:routineId (**)
// ? need to be user specific here as well 

export const deleteRoutine = async (token, routineId) => {
    fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}`, {
  method: "DELETE",
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
}

//**** We were here

// POST /api/routines/:routineId/activities
export const attachActivityToRoutine = async (routineId, activityId, count, duration) => {
 fetch(`http://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}/activities`, {
  method: "POST",
  body: JSON.stringify({
    Activity: {activityId, count, duration}
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
}

// PATCH /api/routine_activities/:routineActivityId (**)
export const updateRoutineActivity = async (routineActivityId, count, duration) => {
    fetch(`http://fitnesstrac-kr.herokuapp.com/api/api/routine_activities/${routineActivityId}`, {
        method: "PATCH",
        body: JSON.stringify({
          Routine_Activity: {count, duration}
        })
      }).then(response => response.json())
        .then(result => {
          console.log(result);
        })
        .catch(console.error);
}

// DELETE /api/routine_activities/:routineActivityId (**)
export const deleteRoutineActivity = async (routineActivityId, token) => {
    fetch(`http://fitnesstrac-kr.herokuapp.com/api/routine_activities/${routineActivityId}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }).then(response => response.json())
        .then(result => {
          console.log(result);
        })
        .catch(console.error);
}
