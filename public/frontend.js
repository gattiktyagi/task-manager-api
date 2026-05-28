// 1. Target the tbody using its ID
        const tbody = document.getElementById('task-list');

        // 2. Loop through the 'tasks' array inside the response
        response.tasks.forEach(task => {
            // Handle null descriptions gracefully
            const descriptionText = task.description ? task.description : '<em>No description</em>';
            
            // Format dates slightly for better readability
            const formattedDate = new Date(task.created_at).toLocaleString();

            // 3. Create the table row structure
            const rowHTML = `
                <tr>
                    <td>${task.id}</td>
                    <td>${task.title}</td>
                    <td>${task.completed ? '✅ Yes' : '❌ No'}</td>
                    <td>${formattedDate}</td>
                    <td>${descriptionText}</td>
                </tr>
            `;

            // 4. Inject row into the table
            tbody.insertAdjacentHTML('beforeend', rowHTML);
        });