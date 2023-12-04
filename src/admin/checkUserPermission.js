export default function checkUserPermission(user = { roles: [] }, permission) {
    const allowAccessForRoles = {
      "route.admin": ["admin"],
      "route.authenticated": ["user", "admin"],
      "route.home": ["*"], //means "Any role"
      "component.Authenticate": ["*", "!user", "!admin"], //Any role except user and admin
      "component.BecomeAdmin": ["user"],
      "component.LogOut": ["user", "admin"]
    };
  
    //If we don't have such permission in list, access denied for everyone
    if (!Array.isArray(allowAccessForRoles[permission])) {
      return false;
    }
  
    //Check if any of user's roles explicitly denies access
    for (const role of user.roles) {
      if (allowAccessForRoles[permission].includes("!" + role)) {
        return false;
      }
    }
  
    //If list of allowed roles contains '*', access allowed for everyone
    if (allowAccessForRoles[permission].includes("*")) {
      return true;
    }
  
    //Check if any of user's roles allowes access
    for (const role of user.roles) {
      if (allowAccessForRoles[permission].includes(role)) {
        return true;
      }
    }
  
    return false;
  }
  