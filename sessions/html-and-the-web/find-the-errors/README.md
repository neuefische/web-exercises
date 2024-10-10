# HTML and the Web: Find the Errors

In this challenge, you will debug HTML code to understand the importance of Prettier and learn how to read error messages.

## Getting Started with HTML

1. Inside this folder, create a file called `index.html`.
2. Inside `index.html`, paste the following code:

   ```html
   <html>
     <head>
       <title>Badly Formatted Page</title>
     </head>
     <body>
       <h1>The Importance of Indented Code</h1>
       <p>
         Indented code is crucial for maintaining readability and organization,
         especially in collaborative environments. It helps developers quickly
         understand the structure of the code, find elements, and nested
         elements. Proper indentation visually separates different blocks of
         code, making it easier to identify relationships between functions,
         classes, and other components, ultimately reducing the chance of
         errors.
       </p>
       <p>
         Additionally, well-indented code follows common best practices and
         standards, which are essential for teamwork and long-term maintenance
         of a project. When code is uniformly indented, it becomes easier for
         others to jump in, review, or modify it without confusion. This clarity
         improves communication between developers and enhances the overall
         quality of the project.
       </p>
       <div>
         <img
         src=https://images.unsplash.com/32/RgJQ82pETlKd0B7QzcJO_5912578701_92397ba76c_b.jpg?q=80&w=1024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
         width="300" height="200" /><br /><a href="https://www.google.com/"
           >Google Here <br
         /></a>
         <ul>
           <li>First item</li>
           <li>Second item</li>
         </ul>
       </div>
       <footer><p>Footer</p></footer>
     </body>
   </html>
   ```

3. Save the file. Once saved, you will notice that Prettier (in the bottom right of VS Code) is showing as red. This indicates that there are some formatting or syntax errors. Prettier cannot format files that contain syntax errors, so the HTML is not indented as expected.

   ![Prettier Red](./assets/prettier-red.png)

   > **Note**: If Prettier is not red, it may indicate that you haven't configured [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) correctly in VS Code. Please refer to the computer setup guide and ensure Prettier is properly configured.

4. Click on the Prettier icon. In the VS Code terminal, go to the "Output" tab and select "Prettier" from the dropdown menu. Here, you will see a list of errors. Read through these errors to identify issues in the code.

   ![Prettier Terminal](./assets/prettier-treminal.png)

5. Analyze the error messages. Do they indicate any missing tags? Which tags need to be corrected? Go back to your HTML file and review the tags to ensure they are properly opened and closed.

6. Save the file again and check the Prettier status. Repeat this process until no more errors appear. When all errors are resolved, the Prettier icon should no longer be red, and the file will auto-indent, indicating that the tags are correct and complete.
