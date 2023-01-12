// This api call helps to register a user, it is used in the register component
export const registerUser = async (username, password) => {
  try {
    const response = await fetch(
      "http://fitnesstrac-kr.herokuapp.com/api/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    );

    const { token } = await response.json();
    return token;
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(
      "http://fitnesstrac-kr.herokuapp.com/api/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }
    );

    const { token } = await response.json();
    return token;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMe = async (token) => {
  try {
    const response = await fetch(
      "http://fitnesstrac-kr.herokuapp.com/api/users/me",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const data = await response.json();
    // console.log("This is me object: ", data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

// Get/Post/Delete requests

export const getRoutinesByUsername = async (username) => {
  try {
    const response = await fetch(
      `http://fitnesstrac-kr.herokuapp.com/api/users/${username}/routines`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const getActivities = async () => {
  try {
    const response = await fetch(
      "http://fitnesstrac-kr.herokuapp.com/api/activities",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

// !check to verify this is working
export const createActivity = async (token, name, description) => {
  try {
    const response = await fetch(
      "http://fitnesstrac-kr.herokuapp.com/api/activities",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          description,
        }),
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

// PATCH /api/activities/:activityId (*)
export const patchActivity = async (token, name, description, id) => {
  try {
    const response = await fetch(
      `http://fitnesstrac-kr.herokuapp.com/api/activities/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          description,
        }),
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

// GET /api/activities/:activityId/routines
export const getRoutineByActivityId = async (activityId) => {
  try {
    const response = await fetch(
      `http://fitnesstrac-kr.herokuapp.com/api/activities/${activityId}/routines`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

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
  try {
    const response = await fetch(
      "http://fitnesstrac-kr.herokuapp.com/api/routines",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

// POST /api/routines (*)
// !Double check here
export const createRoutine = async ({ token, name, goal, isPublic }) => {
  try {
    const response = await fetch(
      "http://fitnesstrac-kr.herokuapp.com/api/routines",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          goal,
          isPublic,
        }),
      }
    );
    const result = await response.json();
    console.log("This is the result in auth.js", result);
    return result;
  } catch (error) {
    console.log(error);
  }
};

// PATCH /api/routines/:routineId (**)
// ?how do we check for user only?

export const patchRoutine = async (token, name, goal, isPublic, routineId) => {
  try {
    const response = await fetch(
      `http://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name,
          goal,
          isPublic,
        }),
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

// DELETE /api/routines/:routineId (**)
// ? need to be user specific here as well

export const deleteRoutine = async (token, routineId) => {
  try {
    const response = await fetch(
      `http://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

// POST /api/routines/:routineId/activities
export const attachActivityToRoutine = async (
  routineId,
  activityId,
  count,
  duration
) => {
  try {
    const response = await fetch(
      `http://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}/activities`,
      {
        method: "POST",
        body: JSON.stringify({
          activityId,
          count,
          duration,
        }),
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

// PATCH /api/routine_activities/:routineActivityId (**)
export const updateRoutineActivity = async (
  routineActivityId,
  count,
  duration
) => {
  try {
    const response = await fetch(
      `http://fitnesstrac-kr.herokuapp.com/api/api/routine_activities/${routineActivityId}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          count,
          duration,
        }),
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

// DELETE /api/routine_activities/:routineActivityId (**)
export const deleteRoutineActivity = async (routineActivityId, token) => {
  try {
    const response = await fetch(
      `http://fitnesstrac-kr.herokuapp.com/api/routine_activities/${routineActivityId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
