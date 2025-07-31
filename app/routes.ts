import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),//creates home page
    route('/auth', 'routes/auth.tsx'),//creates auth page
] satisfies RouteConfig;
