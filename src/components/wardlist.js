import { h, Component } from "preact";

export default function WardList({ wards }) {
  return (
    <div class="pagecontent w3-container w3-light-gray">
      <p class="w3-text-grey">Ward bulletins at this location</p>
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
