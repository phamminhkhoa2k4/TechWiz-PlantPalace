let notifications = document.querySelector('.notifications');
        let success = document.getElementById('success');
        let error = document.getElementById('error');
        let warning = document.getElementById('warning');
        let info = document.getElementById('info');

        function openRegister() {
            document.getElementById("animation-popup").style.marginLeft = '-250px';
            document.getElementById("animation-popup").style.transition = 'all 0.8s linear';
            document.getElementById("login").style.display = 'none';
            document.getElementById("login").style.transition = 'all 0.7s linear';
            document.getElementById("register").style.display = 'block';
            document.getElementById("register").style.opacity = '1';
            document.getElementById("register").style.transition = 'all 0.7s linear';
        }

        function openLogin() {
            document.getElementById("animation-popup").style.marginLeft = '500px';
            document.getElementById("animation-popup").style.transition = 'all 0.8s linear';
            document.getElementById("register").style.marginLeft = '-125px';
            document.getElementById("register").style.display = 'none';
            document.getElementById("register").style.transition = 'all 0.7s linear';
            document.getElementById("login").style.opacity = '1';
            document.getElementById("login").style.display = 'block';
            document.getElementById("login").style.transition = 'all 0.7s linear';
        }

        function checkLogin() {
            var user = document.getElementById("username-login");
            var pass = document.getElementById("pass-login");
            if (user.value == "" || pass.value == "") {
                // alert("Username or password is empty. Please enter again!");
                let type = 'error';
                let icon = 'fa-solid fa-circle-exclamation';
                let title = 'Error';
                let text = 'Username or password is empty. Please enter again!';
                createToast(type, icon, title, text);
                if (user.value == "") {
                    user.focus();
                } else {
                    pass.focus();
                }
            } else if (user.value != "admin" || pass.value != "admin") {
                // alert("Username or password is not correct!");
                let type = 'error';
                let icon = 'fa-solid fa-circle-exclamation';
                let title = 'Error';
                let text = 'Username or password is not correct!';
            } else {
                let type = 'success';
                let icon = 'fa-solid fa-circle-check';
                let title = 'Success';
                let text = 'Login successfully!';
                createToast(type, icon, title, text);
            }
        }
        function checkRegister() {
            var temp = true;
            var user = document.getElementById("username-re");
            var email = document.getElementById("email-re");
            var pass = document.getElementById("pass-re");
            var confirmPass = document.getElementById("confirm-pass-re");
            if (user.value == "" || email.value == "" || pass.value == "" || confirmPass.value == "") {
                temp = false;
                // alert("Please enter full information to register!");
                let type = 'info';
                let icon = 'fa-solid fa-circle-info';
                let title = 'Info';
                let text = 'Please enter full information to register!';
                createToast(type, icon, title, text);
                if (user.value == "") {
                    user.focus();
                } else if (email.value == "") {
                    email.focus();
                } else if (pass.value == "") {
                    pass.focus();
                } else if (confirmPass.value == "") {
                    confirmPass.focus();
                }
            }
            var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (email.value != "" && !email.value.match(mailformat)) {
                // alert("The email address is not valid! Valid entries include: someone@example.com");
                let type = 'error';
                let icon = 'fa-solid fa-circle-exclamation';
                let title = 'Error';
                let text = 'The email address is not valid! Valid entries include: someone@example.com';
                createToast(type, icon, title, text);
                temp = false;
                email.focus();
            }
            if (pass.value != confirmPass.value) {
                // alert("Error!! Confirm password do not match. Please try again.");
                let type = 'error';
                let icon = 'fa-solid fa-circle-exclamation';
                let title = 'Error';
                let text = 'Confirm password do not match. Please try again.';
                createToast(type, icon, title, text);
                temp = false;
            }

            if (temp == true) {
                // alert("Register Successfully!");
                let type = 'success';
                let icon = 'fa-solid fa-circle-check';
                let title = 'Success';
                let text = 'Register Successfully!';
                createToast(type, icon, title, text);
            }
        }

        function createToast(type, icon, title, text) {
            let newToast = document.createElement('div');
            newToast.innerHTML = `
            <div class="toast ${type}">
                <i class="${icon}"></i>
                <div class="content">
                    <div class="title">${title}</div>
                    <span>${text}</span>
                </div>
                <i class="fa-solid fa-xmark" onclick="(this.parentElement).remove()"></i>
            </div>`;
            notifications.appendChild(newToast);
            newToast.timeOut = setTimeout(
                () => newToast.remove(), 5000
            )
        }