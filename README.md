# My-To-Do

The To-Do App is a simple yet powerful tool designed to help users manage their daily tasks efficiently. Built with HTML, CSS, and JavaScript, it features a clean, user-friendly interface that allows for quick and easy task management. Whether you need to jot down a grocery list, plan your day, or track your work assignments, the To-Do App is here to keep you organized.

Features
Task Addition: Easily add new tasks with a simple input bar and an 'Add' button.
Task Removal: Remove tasks from your list once they are completed.
Persistent Storage: Tasks are saved in the browser's local storage, ensuring that your list remains intact even after refreshing the page.
Completed Tasks Management: Move tasks to a separate completed section, keeping your main task list clutter-free.
Daily Refresh: The app automatically refreshes the task list every day at midnight, ensuring a fresh start each day.
Digital Clock: A digital clock display, including the current time, day, and date, helps you keep track of time as you manage your tasks.

Technologies
HTML: Structures the app's content and layout.
CSS: Styles the app, providing a responsive design that adapts to various screen sizes and enhances user experience.
JavaScript: Powers the app's interactivity, including task management and local storage functionality.

How It Works
Adding Tasks: Users can type a task into the input bar and click the 'Add' button or press Enter to add it to the task list.
Completing Tasks: Tasks can be marked as completed by clicking the 'X' button next to each task. Completed tasks are then moved to the completed section.
Viewing Completed Tasks: The 'Completed Tasks' button toggles the visibility of completed tasks.
Local Storage: The app utilizes the browser's local storage to save tasks and completed tasks. This data is retrieved and displayed upon refreshing or revisiting the page.
Automatic Refresh: Utilizing JavaScript's Date object, the app checks the current time and automatically clears the tasks at midnight, providing a new, empty list each day.
Digital Clock and Date Display: The app includes a real-time digital clock and date display, updated every second to keep the user informed of the current time and date.

Setup
To use this To-Do App, simply clone the repository to your local machine:
git clone https://github.com/yourusername/todo-app.git
Open the `index.html` file in your browser to launch the app. No additional setup or dependencies are required.

Contribution
Contributions to the To-Do App are welcome! If you have suggestions for improvements or encounter any issues, please feel free to open an issue or submit a pull request.
