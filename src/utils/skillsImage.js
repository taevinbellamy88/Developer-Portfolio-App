import azure from "../assets/svg/skills/azure.svg";
import html from "../assets/svg/skills/html.svg";
import css from "../assets/svg/skills/css.svg";
import javascript from "../assets/svg/skills/javascript.svg";
import react from "../assets/svg/skills/react.svg";
import bootstrap from "../assets/svg/skills/bootstrap.svg";
import mongoDB from "../assets/svg/skills/mongoDB.svg";
import csharp from "../assets/svg/skills/csharp.svg";
import git from "../assets/svg/skills/git.svg";
import materialui from "../assets/svg/skills/materialui.svg";
import premierepro from "../assets/svg/skills/premierepro.svg";
import markdown from "../assets/svg/skills/markdown.svg";
import microsoftoffice from "../assets/svg/skills/microsoftoffice.svg";
import jQuery from "../assets/png/jquery.png";
import yarn from "../assets/svg/skills/yarn.svg";
import redux from "../assets/svg/skills/redux.svg";
import aspnet from "../assets/svg/skills/aspnet.svg";
import dotnet from "../assets/svg/skills/dotnet.svg";
import api from "../assets/svg/skills/postman.svg";
import sql from "../assets/svg/skills/sql.svg";
import mssql from "../assets/svg/skills/mssql.svg";
import github from "../assets/svg/skills/github.svg";
import nodejs from "../assets/svg/skills/nodejs.svg";
import docker from "../assets/svg/skills/docker.svg";
import typescript from "../assets/svg/skills/typescript.svg";
import angular from "../assets/svg/skills/angular.svg";
import canva from "../assets/svg/skills/canva.svg";
import postgresql from "../assets/svg/skills/postgresql.svg";
import aws from "../assets/svg/skills/aws.svg";

export const skillsImage = (skill) => {
   const skillID = skill.toLowerCase();
   switch (skillID) {
      case "html":
         return html;
      case "css":
         return css;
      case "javascript":
         return javascript;
      case "react":
         return react;
      case "bootstrap":
         return bootstrap;
      case "mongodb":
         return mongoDB;
      case "c#":
         return csharp;
      case "git":
         return git;
      case "materialui":
         return materialui;
      case "premiere pro":
         return premierepro;
      case "azure":
         return azure;
      case "markdown":
         return markdown;
      case "microsoft office":
         return microsoftoffice;
      case "jquery":
         return jQuery;
      case "yarn":
         return yarn;
      case "github":
         return github;
      case "redux":
         return redux;
      case ".net":
         return dotnet;
      case "asp.net":
         return aspnet;
      case "restful api":
         return api;
      case "sql":
         return sql;
      case "ms-sql":
         return mssql;
      case "nodejs":
         return nodejs;
      case "docker":
         return docker;
      case "typescript":
         return typescript;
      case "angular":
         return angular;
      case "canva":
         return canva;
      case "postgresql":
         return postgresql;
      case "aws":
         return aws;

      default:
         break;
   }
};
