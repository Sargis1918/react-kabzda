
import myPhoto from '../../asetts/images/Sako.jpg'
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_DIALOG_TEXT = "UPDATE-NEW-DIALOG-TEXT";
let initialState = {
  dialogsData: [
    { id: 1, photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3sIBap9PNcCSChwLbmjrVwLzJtmzcx4LFZNMfUtIWJZhk8P25625C19Wx-ZsdSPTLyb8&usqp=CAU', name: "Dmitry" },
    { id: 2,photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWYQXwRIN-OpCkBRKd35KZ6h0mJB7q7Rf72ZWW3aZ5NQ&s', name: "Sveta" },
  ],

  messages: [
    { id: 2,photoUrl:'data:image/jpeg;base64,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',name: "Dmitry", message: "hi how are you" },
    { id: 1,photoUrl:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEREhMREhMREhEQERAREBAQDw8PFRYWFRYWFhURFRYYHSggGBolGxYVITEhJSsrLi4uFx8zODctNygtLisBCgoKDg0OGxAQGy0lHyUtLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLf/AABEIALQAtAMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAAAQYHAwQFCAL/xABHEAABAwICBQgECggGAwAAAAABAAIDBBESIQUGBxMxIkFRYXGBkaEXMlJyFEJTk6KjscHC0iM1Q2KDkrPRFWSCpLLjJCVj/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAECAwQFBv/EADQRAAIBAwEDCQcFAQEAAAAAAAABAgMEESESMUEFUWFxgaGxwdETIiMyUpHwFEJy4fEzYv/aAAwDAQACEQMRAD8A8JQqovVHkQoqiAIgRVAiKqIgZVFUQAUCqIAIiiAKoqomBVFUSEEUQIAqIiBkRVEwCKFEgKiIgAiIgCIqogAqihTEVdiupt09zPZt5gH71+ZKYiTd/GxBvTmbc3PxXt6/wYK6YDgRGRz/ALNt/MFVup76jzpv7P8Ast9m/Ztvg0u5mPIuSqgMb3MPxSR0X6D3jNcRU01jQraxoVFFUDCIiZEiqIkSCKKoAIiJkcBRVRIZVCqiACIiAIqiiAKu1FQkuhbn+nw25uLzGP8AjfvXUWcxaPtpKghtnFBTl3vMa6QnxBKprVdj7N/Yuo09t9qX3PP0nTX0tu7WBq4ssuBc038DddjanDhrGu9uGM94c4fYAu/NT309h5t41/hAH/aF+trNPeWmcPjtkYO5zT+JZIT+LTWf2+X9G2pD4VV/+vM8LW7R5FfuwMO+3Fh0F7WtPmCsbIWx9fqe1fRSe2Y29uCUHx5Q8lhWstLuqqePgGyvI7CcTfIhXWtXahFdHngz3dLZlJr6vI81RVRazGFVEQSCqIgQREQRCKIgkVERABFEQBUURAgqiIJHb0NS76eGLmkljaewuFye65W0IafFpp7uaOlae82aPInwWF7OKTeV0Z4iJskh7hhBPYXDvWydGw/+dWSdDKaMfylx+1vguVe1PfaXCPi/Q61hT+Gm/q8F6nhRQX04829WAP8AoNZc27bZ/wBldpsGIUh6KjBf3rH8K9Skg/8Aazv6KSIfzP4fQTXqDHFBfMNrKYnjzuLeb3lmjU+LB8yXga5Q+FPrbOhtHgypJBxZVMbcc2OxvfmzYFie0+lwVuL5WJjvC7D32aPELYWudPjpr87JYHjukaD5ErGdrdLyaeW3Bz4ye0AgfRcrLOpiUF/JeD8Sm9pZhN/xZrZEUXaOIVEUKBBAqomBUREhkREQRKiIgZEVRABERMYREQRNh7I6XlVEvQI4x3kk/Y1bApoMLpXfKPDvBjGW+ifFaV1d1mnoiRGWmNxDnRuFwea4IzBt0G3UVs3QGulLVWaTupTlgkIAJ6Gu4HyPUuJe0am254003cF0ndsa9L2ap516efoPVgpwKqZ/tQUw8HT/ANwv1puDHG0Wvaeld/LPGT5ArvWHHn/tf+5X6ssGeJ0NnTB1NJ0+8hkj53se0dpBt5rwto1LvKGQ88bmSDucAfJxXoaa1ipqQfpZBi5o2cp5/wBI4DrNgtbax68z1QdExoihcC0jJz3DnBcRYA9XiVqtaNWclKK0Tzl7jJd3FKEHGT1a3IxJVEXoDzwUVRIAiIgAoqiACIiYgiKJDKi9fQerVRWNc6ENIYcLsTw05i44r0/R7X+zH86FVK4pRey5LJdG2qyWVF4MUCqyr0eV/sx/OBeBpXRslNK6GSwe3DcNIIzAI8iE4Vqc3iLTZGdCpBbUotI6iiymHUOte1rw2MtcA4HeDgQCD4Fcno9r/Zj+dCh+po/Uif6Wt9Jiaiyep1Fro2OeWssxrnG0gJsBc2HObBYyrIVIT+Rp9RXUpTh86x1mR6A1zqqWzcW+i+TkJy913EdmYXoac2hzzcmAbhls3Ah0h7DazR5rDFkdDqRWzRslY1mGRoc28gabHMEjrGaoqUreEtuaSfT6bjRTrXEo7EG31eu8x2R5cS5xLnHMkkknrJOZUWV+j2v9mP5wKej2v9mP50Kz9TR+pfcr/S1vpZiqi7FfSOhkfE+2ON2F1jiFxxAsvzSUskrgyNjnvPBrAXHtsObr4BW7SxtcCjZe1juOJFldLs9rni5EcfVJJ+QOsu8NmVT8rB9Z+VUO7orfJeJoVnWf7fIwVVZq/ZpV80lOe10o/CV5emdTqqljdLIIyxuHEWPva7g0ZEC+ZHDpTjdUZPCkKVpWisuOhjyIivKSIqiCIRFEDMt1C1ljozIyVr3CYx4SwA2IxAkgkZHEOHQtwr52pvXZ7zftC+iVxuUacYzUlxznsO3yZUlKDi+G7vOhpnSbKWF88gcWR4bhgBObg0WuQOJC0lrFpIVNTLOAQJHAgO4gBoABsTzBbY2h/q+f+D/VYtLK7kymtlz47uzRlPKlSW0ocN/ibg1F1jZUxsgDXiSCGMPcQ3CcIDbgg3zPMQFly1rshhzqX9AiaO8vJ+5bDlma0sBNjI4tb1kNc63g0nuXPuoKFVxjuOhaTlOjGUjmIutCax6O+DVM0NsmvOD3Dm3yIW+1rTaxo2zoqkDJw3Lz1i5ZfuLh3BX8n1Nmps8/jwKOUaW1S2ubX1MF0ZRmeWOFvGR7WdlyAXdwue5fQEMYY1rQLBoDQOgAWAWq9luj95UumI5MDDb333A+iH+S2pPK1jXPcQGsaXOJ4ADMk9wUuUamaiguC72R5Np7NNz533HKvK0/pmOji3sge5uIMAYATc3I4kdBXqrFtpMV6CQ+w+J3i8N/EsdGKlOMXxZurScacmuCZqqoLqupcWAl1RO4sB/fcSAeNgLi/MAFubV3QUVHEI2AYjbeSWzeeck9HQFrfZlSB9aHH9jG947TZg7+UT3LcC28o1MSVJbkv87jBydTTi6st7/PE4pZA0FziGgAkkkAADMk3WLVO0GhY4tDpH2+MyPLuuRft4Lp7VdIlkEcLSRv3OLrc7WWJae9zfBasRZ2casNuTfRgV5fSpT2IY6cm6dD65UtVI2GPeB7sVg9gbwBJzBPMCuDaY+1C8e1JEPpX+5at1e0l8GqI57FwjJJA4kFpBA7iVkWt2uTK2AQticwiRr7uc08ARbLtCsdk4V4uCbjo2+0gr5VKElNra13GGKoi6pxwiiJjKiIgDkpvXZ7zftC+iV87U3rs95v2hfRK5HKf7e3yOxyVul+c5je0X9Xz/wf6rFpUrdW0X9Xz/wf6rFpVXcmf8n1+hRyp/1XUbU2TxWp5X+1Nh/la0/iK59oukjT/BJBxZUby3SGCxHeHEd67GzSLDQsPtySu8HYfwrHtrsvLpmdDZXc/OWD8KyRW3eNPdlmyTdOzTXMvFGx4ZA9ocDcOAcD0gi4K8rW/RvwmkljGbg3GzpxMzAHbw710NnWkt9RsaTyoDuj2AAsPgQO5ZSsjTpVMcU/A2JqrT6GvExTZxo7c0bXH1p3GU9nqtHgL96/G0rSO6oywHlTvbGPd9ZxHcLd6yqOMNAa0ABoAaBkABkAOgLVO1LSO8qWwg8mBmfvvsT5YPNaLde2uNp8+fTyM9zL2FvhdSNp0cuONj/aYx3iAV5Wu0WKhqB/88X8pDvuXPqvLjpKZ3PuIgeHENAPmCubT0WOmqG+1BM3xYQsy92fU/M0v3qfWvI15skH6afp3Tf+Wf2BbSWpdlU4bVvYfjwut2hzTa3ZdbaWm/T9u+wy8nv4C7TWe1716b3JftavJ2f6BgrHTCYOIjbGW4XYeNwb9PALJNrVIXRQSj9m9zD/AKwCCeq7Ld611o/SU1O4uhkfGTa+E5G3AEcD3rfbKU7XEHh7jBcuMLvamsrm7Da3o8oOiX50rxNcNTqWmpZJohJjYY/WfiFi4A5W61leptfJUUcUspxSP3mJ1g2+GR7QbAADIBcO0Bt9Hz26Ij4SsJXPhWqqsoyk9+HrpvOhUo0nRcoxXy6aamlUUVXoDzxEREgyVEUQBlGpGrIrXPc6QsEJj9VodiJubXJyth81uYLSOretUtC17Y443bxwcS/FfIWAFjw4+K9n0m1PyMH1n5lyru3r1ajaWVw1/OJ17S5oUqeG9eOhsLT2jBVwPpy4sEmG7gASMLg4ZHratUU+q+KvdQ7wgNLryYOYMxg4b89wOPPfqXq+k2p+Rg+s/MvIj1tlbVurd3HvHsDC3lYcgG4hne9mgJ29C4pKS6HjXiK5rW1WUW3ueunA25oTRraaBkDSXCMEYiACbuLrm3WSsb2g6ufCGOqt4WmngccGEEENu853yNrrH/SbU/JQfWfmXDVbRaiRj43RQ2e1zHW3nBwIy5XWqYWtzGe2lr1l07q2nDYzoNlukt3UuhJ5NQzL32XI8i7yW2V89UFW6GRkrPWje14v1G9j1HgeorMvSbU/JQfWfmV15aTnU2oLfv1KLK8p06ezN4xu6v8Acmz55gxrnuNmsaXOPQACSVpKgpnaRrsLnFnwiSR5dbFhABda188gB4L1NKa/1E8T4THE0StLXObjuAeIFyRmLjvXg6A0u6kmEzGtc4Nc0B+K2eRORBva/ipWttUpQm8e81hfnX4CurqnVnBL5c5ehu3Q+jxTQxwhxcIxhDiACcyRkF3JWBwLTwcCD35LV3pNqfkoPrPzJ6Tan5KD6z8yxuxrt5x3mxX9uljPcdbS2jDoeqp5WPdI0lzs2hpsLB7Lg2PJctp0FayaNssbg5jwCCPsPQVprWbWeSuEYkZGzdF1izF8a1wbk+yF1NDafqaQ3heQ0+sw8ph6y08D1ixWypaTq005fOt/Suwx0rynRqNR+R83D7m8NI0Uc8bopBiY8WcPvHQQc+5YZJsygJ5M8oHMCGO87LzqfadKBy6djj+5I6PyIcuf0pf5X/c/9azU7e7p/IsdqNNS4tKvzvPY/IzXQOjBSwMga4uEeKznAAnE4u4D3rdy6evDL0FQP3AfBwKxb0o/5X/c/wDWujpnaD8Igkg+DYN40txb/FbrtgF+xKFpX9opSXHO9c/WOd5bqDjF8NNH6GDqKou6cEIiJDIqoqgQUVUQBVAqogDu6HoDUTMiBwhx5TvZYAS957AD4Lvy6uu+FCmY8Fr2iRkzuS0xFuPekcwAB7wuXQNXDTwzyF8bqiRojZDJHM4YCeXcgWu4AAZi2fYvVpdOUpjgkkcxsjGy08kEMcwO4lFrAkFuJpJcBexF7ZrJVqVVJuKeNy044zk20qVJxSk1nfv4cx48ejaOQS7qeXFFFJIN7C1jZMDSRgIcSDe2RF7FTRerxmp5JseF4x7mK2cm7AdLY3ysCLcc7qs0fRsxl9UyQOGGERsmaQ5xAEsoLcg0XOEXXq/49DDLSshdTvhgY0b58U+JpN96bWB5RJ4A8QlKc90HJ8dVzLqW/RDjCGczwu3n06TxNCaNhmZM6R8jNwzekMja+7bgEC7hncjLhbnXYh0FC/dyMme+B8rYHndBskb3+oHMLrFp6QeldyndRRurGsqWCOojLIbw1PJu8OAIwcABbry67fnR9TSwNZC2cOxVEU8826mEbWxXLY2jDiJJ57AcAlKpUbbjnhhY4Y14cBxp00kpbL59Vv4fc61ToemaJP0s43ZkaHSQxMa90bgHsY7eEl2dwONk1j1dFMyGSOQytmAyLA1zSWte1pAJzIdfLoK72ma+Goa8SVUcjWumkpw2Kqa8Oe5oa1xLMJaADkLZrvf43Rh9nSiWNsNM9gEcw/T0wAa2zmjJwJF+pRVSqsPXjlY88LrJunReVos4w8rTs7jzK/Vynp3QMlqJA6a4c5sTCxhBLHgnEDk8WyHSuKo1diiFS6V8zG072xsJiYd45wuA2z+JGeWQbY5cFwafqY5Iae07ZZWb3etDJWm8sj5S7lNAI5QGXSuXWSsZJDTMbUiYwM3bmhk7cyScYL2i4DQxvHoUour7q2nvaem7D6tObXyK5eyW1hLRJrXo9THVEKq3GEIiJAEREAFVETEFFUSGRVRVABFAiAKiKBAFUKKoAIoqgYUVRMQRFEAEVRIAoiqACIiAIiqIGRERMgVCiIGRERIYVREAEREAFCiIEVERMCKoiQ0ERExBERIQRETGFURAH//Z', name: "Dmitry", message: "auuuuuu" },
  ],

  
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newDialog = {
        id: 3,
        photoUrl:myPhoto,
        name: "Sako",
        message: action.newDialogMessage,

        

      };
      return {
        ...state,
        messages: [...state.messages, newDialog,],
        
      };
    case UPDATE_NEW_DIALOG_TEXT:
      return { ...state, newDialogMessage: action.text };
    default:
      return state;
  }
};
export const onSendMessageClick = (newDialogMessage) => {

 
  return{
  type: ADD_MESSAGE,
  newDialogMessage: newDialogMessage
} 
};

export const onMessageChange = (text) => {
  
   return {
    type: UPDATE_NEW_DIALOG_TEXT,
    text: text,
  };
};
export default dialogsReducer;
