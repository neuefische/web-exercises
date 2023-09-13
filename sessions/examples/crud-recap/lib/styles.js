import styled from "styled-components";
import kebab from "kebab-case";

export function styledDefaults(defaults) {
  return (props) =>
    Object.entries(defaults)
      .map(([key, value]) => `${kebab(key)}: ${props[key] || value};`)
      .join("\n");
}
