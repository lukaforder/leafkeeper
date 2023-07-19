<nav>
    <a href="/home">dashboard</a>
    <a href="/login">login</a>
    <a href="/onboarding">onboarding</a>
    <a href="/settings">settings</a>
    <a href="/notifications">notifications</a>
    <a href="/plants">plants</a>
    <a href="/plant">plant</a>
    <a href="/reminders">reminders</a>
</nav>

<style>
    nav{
        display: flex;
        justify-content: center;
        gap: 10px; 
        position: fixed;
        left: 50%;
        transform: translate(-50%, 50%);
    }
</style>

<slot></slot>