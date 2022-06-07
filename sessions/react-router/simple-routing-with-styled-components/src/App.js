/**
 * Given is a simple app with four pages ("home", "product", "team" and "account").
 * Currently there is no routing in place. All components for the four distinct pages are rended together.
 * The app uses styled components to apply basic CSS styles.
 *
 * Implement the following features:
 *
 * 1. Use the <Routes> and <Route> components to render the four page components based on the current route.
 * Use the following routes: "/", "/team", "/product", "account"
 * Don't forget to add the <BrowserRouter> component to the index.js
 *
 * 2. The "home" page contains a link to the "team" page. Make the link work by using the <Link> component.
 *
 * 3. The link from step 2 is displayed with default browser styles. Try to use the <StyledLink> component to apply custom styles.
 *
 * 4. Have a look at the <Header> component. It contains links to all four pages. Use the <Link> component to make the routing work.
 *
 * 5. Apply custom styles to the links with the <Header> component by using the <StyledNavLink> component.
 *
 * 6. The current active page should be displayed with the text color "lime" within the <Header>.
 * (Tip: <NavLink> component from "react-router" provides an "active" class)
 *
 * 7. The "account" page includes a login button. Use the event handler to switch programmatically to the "/" page, after the user clicks on the button.
 * (Tip: "react-router" provides the "useNavigate" hook)
 */

import Header from './components/Header';
import Home from './components/pages/Home';
import Product from './components/pages/Product';
import Team from './components/pages/Team';
import Account from './components/pages/Account';

export default function App() {
	return (
		<>
			<Header />

			<Home />
			<Product />
			<Team />
			<Account />
		</>
	);
}
