import {createContext, useContext} from "react"

export const ThemeContext = createContext(
	{
		//  When creating a new context, it's a good idea to provide a default value that will be used if no provider is present. 
		themeMode:"Dark",
 		darkTheme: ()=>{
			// console.log("Dark");
		}, 
		lightTheme:()=>{
			//  console.log("Light");
		}
	});

	export const ThemeContextProvider = ThemeContext.Provider

	export default function useTheme() {
		return useContext(ThemeContext);
	}
