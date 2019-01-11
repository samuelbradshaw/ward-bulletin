import { h, Component } from "preact";

export default function WardList({ wards, message }) {
  return (
    <div class="w3-container w3-light-gray fullheight">
      <p class="w3-text-grey">{message}</p>
      <ul class="w3-ul">
        {wards.map(ward => (
          <li class="w3-white w3-ripple" onClick={() => selectWard(ward)}>
            {ward.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function selectWard(ward) {
  window.location.href = `/bulletin/${ward.id}`;
}
