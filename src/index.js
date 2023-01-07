import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Message from './Message';
import Update from './update';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <div className='main-1'>
  <h3> ویژه </h3>
  <div className='special'>   
<Message banner="https://static.namava.ir/Content/Upload/Images/5df1aaf4-955a-41ff-ac43-bfbec7b246aa.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" type="سریال-2022" rate="82%" imdb="7.5" translate="زیرنویس" title="تازه سرباز" ></Message>
<Message banner="https://static.namava.ir/Content/Upload/Images/a72c4c32-7067-40b2-b63d-6de918b917d7.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" type="سریال-2022" rate="94%" imdb="8.7" translate="دوبله نماوا" title="بیست و پنج بیست و یک"></Message>
<Message banner="https://static.namava.ir/Content/Upload/Images/6e5c1372-b735-4a91-b32e-2aadbb5b7878.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" type="سریال-2022" rate="83%" imdb="5.9" translate="دوبله نماوا" title="گارسیا" ></Message>
<Message banner="https://static.namava.ir/Content/Upload/Images/f062a4ed-4dd1-416d-8222-3cb9d4842650.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" type="سریال-2022" rate="87%" imdb="8.4" translate=" زیرنوس" title="1923"></Message>
<Message banner="https://static.namava.ir/Content/Upload/Images/3e8127a7-1005-4295-996b-cb804b95358f.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" type="سریال-2017" rate="90%" imdb="8.4" translate="دوبله نماوا" title="ساخته شده در آبیس"></Message>
<Message banner="https://static.namava.ir/Content/Upload/Images/597ee6af-55eb-4a52-9f61-63885da5e15f.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" type="سریال-1401" rate="88%" title="شبکه مخفی زنان"></Message>
<Message banner="https://static.namava.ir/Content/Upload/Images/de41b9f5-e6e6-45cc-bf9d-7f88ec429ffa.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" type="سریال-1401" rate="87%" title="آنتن"></Message>
</div>
</div>

<div className='main-2'>
  <h3> سریال های به روز شده </h3>
  <div className='new'>   
<Update banner="https://static.namava.ir/Content/Upload/Images/61c7649b-0f45-4225-b891-f6c2fec0ee7d.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" title=" آپارتمان بی گناهان" part="فصل 2 قسمت 49 و 50" ></Update>
<Update banner="https://static.namava.ir/Content/Upload/Images/d501aad8-88a4-49de-a598-622f5e59844c.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" title=" شروع زندگی در جهانی" part="فصل 2 قسمت 16" ></Update>
<Update banner="https://static.namava.ir/Content/Upload/Images/8cf16b47-9660-4dda-bdd7-8b590348f347.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" title=" با مدیر برنامه ام تماس بگیر" part="" ></Update>
<Update banner="https://static.namava.ir/Content/Upload/Images/ec65ab33-11e5-41bf-b628-7cb818723d12.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" title=" مرد اره ای" part="فصل 1 قسمت 30" ></Update>
<Update banner="https://static.namava.ir/Content/Upload/Images/722b8374-7d79-461b-ac47-b92f0a23049f.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" title=" عشق فراموش نشدنی" part="فصل 1 قسمت 9" ></Update>
<Update banner="https://static.namava.ir/Content/Upload/Images/3e8127a7-1005-4295-996b-cb804b95358f.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" title=" ساخته شده در آبیس" part="فصل 1 قسمت 4" ></Update>
<Update banner="https://static.namava.ir/Content/Upload/Images/422796e2-230b-48a7-8ad4-650315c8523c.jpg?anchor=middlecenter&crop=auto&scale=both&w=200&h=294" title=" دردسرهای فلایشمن" part="فصل 1 قسمت 8" ></Update>


</div>
</div>
</div>




);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
