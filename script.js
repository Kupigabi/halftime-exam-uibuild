document.querySelector("#root").insertAdjacentHTML("beforeend", `
<from class="container">
    <h1>Visszajelzés</h1>

    <input type="text "placeholder="Tárgy">

    <textarea placeholder="Megjegyzés"></textarea>

    <div class="checkbox-container">
        <input type="checkbox" class="checkbox-1">
            <p>Elolvastam és elfogadom az <a href="">Adatkezelési Tájéjoztatót</a></p>
    </div>

    <div class="checkbox-container">
        <input type="checkbox" class="checkbox-2">
        <p>Szeretnék hírlevelet kapni</p>
    </div>

    <button>Mentés</button>
</form>


`)