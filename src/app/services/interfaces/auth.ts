export interface UserInterface {

  username: string;
  password: string;
  roleName: "ADMIN" | "CLIENT" | "SELLER";
  firstName: string;
  lastName: string;
  address: string;

}


export type LoginInterface = Pick<UserInterface, "username" | "password">

export type PasswordChange = Pick<UserInterface, "username" | "password"> & {newPassword: string}



// export type LoginInterface2 = Omit<UserInterface, "address" | "firstName" | "lastName" | "roleName">
//
// export interface LoginInterface3 extends UserInterface {
//   email: string;
// }

