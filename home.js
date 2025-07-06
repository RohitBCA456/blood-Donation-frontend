async function logout() {
          try {
                    const response = await fetch('https://localhost:8000/api/v2/users/logout', {
                              method: 'POST',
                              credentials: 'include'
                    });

                    if (response.ok) {
                              console.log('Logout successful');
                              window.location.href = 'https://blooddonationdib.netlify.app/loginPage.html';
                    } else {
                              console.error('Logout failed');
                    }
          } catch (error) {
                    console.error('Error:', error);
          }
}