import { GraphQLClient } from "graphql-request";
import { GRAPH_API } from "../constant";

export const client = new GraphQLClient(GRAPH_API);
