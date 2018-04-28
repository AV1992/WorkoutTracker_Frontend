$(document).ready(function () {
    var user = JSON.parse(sessionStorage.getItem('user'));
    
    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/exercise/getForUser/' + user.id,
        dataType: 'json',
        success: function (data) {
            for (i = 0; i < data.length; i++) {
                $('#tableExercise').append(getExerciseTableRow(data[i]));
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });

    $('#selectAll').change(function () {
        var checkbox = $('#selectAll');

        $("input[name='check']").each(
            function (index) {
                var input = $(this);
                input.prop('checked', checkbox.is(':checked'));
            }
        );
    });

    $('#deleteExercises').bind('click', function () {
        var exerciesToDelete = $("input:checked[name='check']").length;

        if (exerciesToDelete > 0) {
            $('#modalDeleteExerciseText').text('Sollen die ' + exerciesToDelete + ' Übungen wirklich gelöscht werden?');
            $('#modalDeleteExerciseYes').attr('onClick', 'deleteExercises()');
            $('#modalDeleteExercise').modal('show');
        }
    });

    $('#saveExercise').bind('click', function () {
        console.log('saveExerciseClick')
    });

    loadNavbar();

    $('#btnLogout').bind('click', function () {
        sessionStorage.removeItem('user');

        loadNavbar();

        window.location.href = '../sites/login.html';
    });
});

function getExerciseTableRow(data) {
    var append = '<tr id="tableRow' + data.id + '">';
    append += '<td class="table-col-check pl-0">';
    if (data.userid != null) {
        append += '<input id="' + data.id + '" name="check" type="checkbox" class="form-check-input ml-0">';
    }
    append += '</td>';
    append += '<td id="tableRowData' + data.id + '">';
    append += data.name;
    append += '</td>';
    append += '<td class="float-right pr-0">';
    
    if (data.userid != null) {
        append += '<button type="button" class="btn btn-orange btn-add button-margin-right" onclick="editExercise(' + data.id + ')"><i class="ion ion-edit"></i></button>';
        append += '<button type="button" class="btn btn-orange btn-add" onclick="deleteExerciseClick(' + data.id + ')"><i class="ion ion-close-round"></i></button>';
    }
    
    append += '</td>';
    append += '</tr>';

    return append;
}

function addExercise() {
    $('#modalTitle').text('Übung hinzufügen');
    $('#exerciseName').val('');
    $('#btnSaveExercise').attr('onClick', 'addExerciseSave()');
    $('#modalExercise').modal('show');
}

function addExerciseSave() {
    var name = $('#exerciseName').val();
    var user = JSON.parse(sessionStorage.getItem('user'));
    
    $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/exercise',
        dataType: 'json',
        data: {
            'name': name,
            'userid': user.id
        },
        success: function (data) {
            $('#tableExercise').append(getExerciseTableRow(data));
            $('#exerciseName').val('');
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
            $('#exerciseName').val('');
        }
    });
}

function editExercise(id) {
    $('#modalTitle').text('Übung bearbeiten');
    $('#btnSaveExercise').attr('onClick', 'editExerciseSave(' + id + ')');
    $('#modalExercise').modal('show');

    $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/exercise/' + id,
        dataType: 'json',
        success: function (data) {
            $('#exerciseName').val(data.name);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}

function editExerciseSave(id) {
    console.log('editExerciseSave ' + id);
    
    var name = $('#exerciseName').val();
    
    $.ajax({
        type: 'PUT',
        url: 'http://localhost:3000/exercise',
        dataType: 'json',
        data: {
            'id'  : id,
            'name': name,
            'dateModified' : 1337
        },
        success: function (data) {
            $('#tableRowData' + id).text(data.name);
            $('#exerciseName').val('');
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
            $('#exerciseName').val('');
        }
    });
}

function deleteExerciseClick(id, name) {
    $('#modalDeleteExerciseText').text('Soll die Übung wirklich gelöscht werden?');
    $('#modalDeleteExerciseYes').attr('onClick', 'deleteExercise(' + id + ')');
    $('#modalDeleteExercise').modal('show');
}

function deleteExercise(id) {
    $.ajax({
        type: 'DELETE',
        url: 'http://localhost:3000/exercise/' + id,
        dataType: 'json',
        success: function (data) {
            var row = '#tableRow' + id;
            $(row).remove();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
}

function deleteExercises() {
    $("input:checked[name='check']").each(
        function (index) {
            var input = $(this);
            deleteExercise(input.attr('id'));
        }
    );
}
