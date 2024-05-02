import { EnumRole } from "./EnumRole";

/*
public record RegisterDTO(
		String first_name,
		String surname,
		String img_profile,
		String email,
		String password,
		EnumRole user_role) {

}
*/
export interface RegisterDTO{
  first_name?:string,
  surname?:string,
  email?:string,
  password?:string,
  user_role?:EnumRole,
}
